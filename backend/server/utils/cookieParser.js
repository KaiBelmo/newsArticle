export const cookieParser = (cookieString) => {
  const cookies = {};
  if (!cookieString) {
    return cookies;
  }
  cookieString.split(";").forEach(cookie => {
    const [k, val] = cookie.trim().split("=");
    cookies[k] = val;
  });
  return cookies;
}