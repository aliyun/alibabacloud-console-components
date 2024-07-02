## Description

Extended Component for the TimerPicker Component in @alifd/next.

You can get locale time in onChange Callback.

## Usage

```tsx
import TimePicker from '@alicloud/console-components-time-picker-tz';

export default function App() {
  return (
    <TimePicker
      onChange={(m) => {
        // get UTC time
        console.log(m.utc().format());
      }}
    />
  )
}
```