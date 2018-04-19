export function getUserByLimit(limit: number): String {

  if( limit == 100) return 'u0';
  else if( limit == 1000) return 'u1';
  else if( limit == 5000) return 'u2';

  return 'u4999';
}

export function getSplitedContent(content: String): Array<any> {
    return content.split(/(?=#)/g);
}