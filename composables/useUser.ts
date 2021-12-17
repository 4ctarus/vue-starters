export default function () {
  const user = useState<string>("user");

  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return user.value;
      },
      set(newValue: string) {
        user.value = newValue;
        trigger();
      },
    };
  });
}
