import { useState } from '#app';

export default function () {
  const user = useState<{ user: string; loaded: Date }>('user', () => {
    return {
      loaded: null,
      user: null,
    };
  });

  return customRef((track, trigger) => {
    return {
      get() {
        track();
        // get user from back if not loaded
        if (!user.value.loaded) {
          console.log('load from back');
        }

        return user.value.user;
      },
      set(newValue: string) {
        user.value.user = newValue;
        console.log(user.value);
        trigger();
      },
    };
  });
}
