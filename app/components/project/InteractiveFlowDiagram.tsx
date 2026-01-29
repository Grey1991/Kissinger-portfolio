'use client';

import { useState } from 'react';
import styles from './InteractiveFlowDiagram.module.css';

interface FlowNode {
  label: string;
  x: number;
  y: number;
  type?: 'start' | 'end' | 'normal';
}

interface FlowDiagram {
  id: string;
  label: string;
  caption: string;
  nodes: FlowNode[];
}

interface InteractiveFlowDiagramProps {
  title?: string;
  content?: string;
  flowDiagrams: FlowDiagram[];
}

export const InteractiveFlowDiagram = ({ 
  title, 
  content, 
  flowDiagrams 
}: InteractiveFlowDiagramProps) => {
  const [activeFlowIndex, setActiveFlowIndex] = useState(0);

  return (
    <div className={styles.container}>
      {/* Header */}
      {title && (
        <h3 className={styles.title}>
          <span className={styles.titleDecoration}/> 
          {title}
        </h3>
      )}
      {content && (
        <p className={styles.content}>{content}</p>
      )}

      {/* Toggle Buttons */}
      <div className={styles.toggleButtons}>
        {flowDiagrams.map((flow, idx) => (
          <button
            key={flow.id}
            onClick={() => setActiveFlowIndex(idx)}
            className={`${styles.toggleButton} ${
              activeFlowIndex === idx
                ? styles.toggleButtonActive
                : styles.toggleButtonInactive
            }`}
          >
            {flow.label}
          </button>
        ))}
      </div>

      {/* Diagram Container */}
      <div className={styles.diagramContainer}>
        {flowDiagrams.map((flow, idx) => {
          // Define custom connections for flow-1 (branching structure)
          const connections = flow.id === 'flow-1' ? [
            [0, 2], // Discover -> Select
            [2, 3], // Select -> Add
            [3, 4], // Add -> Checkout
            [0, 1], // Discover -> Filter (branch)
            [1, 2], // Filter -> Select
          ] : flow.nodes.map((_, i) => i < flow.nodes.length - 1 ? [i, i + 1] : null).filter(Boolean) as number[][];

          return (
            <div
              key={flow.id}
              className={`${styles.diagramLayer} ${
                idx === activeFlowIndex
                  ? styles.diagramLayerActive
                  : styles.diagramLayerInactive
              }`}
            >
              {/* SVG Lines */}
              <svg className={styles.svgConnections}>
                {connections.map((connection, connIdx) => {
                  if (!connection) return null;
                  const [from, to] = connection;
                  const fromNode = flow.nodes[from];
                  const toNode = flow.nodes[to];

                  if (!fromNode || !toNode) return null;

                  return (
                    <line
                      key={connIdx}
                      x1={`${fromNode.x}%`}
                      y1={`${fromNode.y}%`}
                      x2={`${toNode.x}%`}
                      y2={`${toNode.y}%`}
                      stroke="rgba(6, 182, 212, 0.3)"
                      strokeWidth="2"
                      strokeDasharray="5 3"
                      className={styles.line}
                    />
                  );
                })}
              </svg>

              {/* Nodes */}
              {flow.nodes.map((node, nodeIdx) => {
                const bgColor = 
                  node.type === 'start' ? 'from-emerald-500 to-teal-600' :
                  node.type === 'end' ? 'from-purple-500 to-pink-600' :
                  'from-cyan-500 to-blue-600';

                return (
                  <div
                    key={nodeIdx}
                    className={styles.node}
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className={`${styles.nodeInner} ${styles[`nodeInner${bgColor.replace(/from-|to-|-/g, '')}`]}`}>
                      {node.label}
                      <div className={styles.nodePulse} />
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Caption */}
      <p className={styles.caption}>
        {flowDiagrams[activeFlowIndex].caption}
      </p>
    </div>
  );
};
