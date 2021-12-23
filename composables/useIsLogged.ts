import useToken from './useToken';

export default function () {
  const token = useToken();

  return readonly(token);
}
