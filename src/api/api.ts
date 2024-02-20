export const apiCall = (link: string): Promise<any> =>
  fetch(link).then((response: Response) => response.json())