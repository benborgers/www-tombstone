export const GET = ({ redirect: _redirect }) => {
  const redirect = (url) => _redirect(url, 301);
  return redirect("https://ben.page");
};
