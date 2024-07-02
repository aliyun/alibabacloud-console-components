export function getTimeZone() {
  let timeZone;

  if (Intl && Intl.DateTimeFormat && Intl.DateTimeFormat().resolvedOptions) {
      const options = Intl.DateTimeFormat().resolvedOptions();
      if (options && options.timeZone) {
          timeZone = options.timeZone;
      }
  }

  return timeZone;
}