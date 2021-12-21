import { useState } from "#app";

export default function () {
  const tokenCookie = useCookie("token");
  const token = useState<string>("token", () => tokenCookie.value);

  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return token.value;
      },
      set(newValue: string) {
        token.value = newValue;
        tokenCookie.value = newValue;
        trigger();
      },
    };
  });
}
