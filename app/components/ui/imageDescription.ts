/** Uses the actual asset name as context, rather than an uninformative image number. */
export function imageDescription(src: string, context = 'Project interface') {
  let name = src.split('/').at(-1)?.split('?')[0] || '';
  try { name = decodeURIComponent(name); } catch { /* Retain malformed filenames safely. */ }
  name = name.replace(/\.[a-z0-9]+$/i, '').replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim();
  return name && !/^\d+$/.test(name) ? `${context}: ${name}` : context;
}
