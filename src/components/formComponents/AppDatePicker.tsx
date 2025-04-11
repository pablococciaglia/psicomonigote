import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import dayjs from "dayjs"
import type { FC } from "react"

interface AppDatePickerProps {
  onChange: (...event: any[]) => void
  value: string | undefined
}

export const AppDatePicker: FC<AppDatePickerProps> = ({ onChange, value }) => {
  return (
    <DatePicker
      slotProps={{
        calendarHeader: {
          sx: { bgcolor: "background.default", color: "primary.light" },
        },
        desktopPaper: { sx: { bgcolor: "primary.light" } },
      }}
      sx={[
        {
          "& label": {
            color: "background.default",
          },
          "& label-focused": {
            color: "background.default",
          },
          "& label.Mui-focused": {
            color: "background.default",
          },
          "& label.Mui-error": {
            color: "warning.main",
          },
          "& .MuiOutlinedInput-root, .MuiOutlinedInput-root:hover": {
            color: "background.default",
            borderRadius: 50,
            borderColor: "background.default",
            "& fieldset": {
              borderColor: "background.default",
            },
            "&.Mui-focused fieldset": {
              borderColor: "background.default",
            },
          },
          "& .Mui-error, .Mui-error:hover": {
            borderColor: "warning.main",
            "& fieldset": {
              borderColor: "warning.main",
            },
            "&.Mui-focused fieldset": {
              borderColor: "warning.main",
            },
          },
        },
        {
          "&.MuiInputBase-input": {
            bordercolor: "red",
            "&:hover, &.Mui-focusVisible": {},
            "&.Mui-active": {},
          },
        },
      ]}
      label={"Seleccione fecha de nacimiento"}
      views={["year", "month", "day"]}
      format="DD/MM/YYYY"
      value={value ? dayjs(value, "DD-MM-YYYY") : value}
      maxDate={dayjs().subtract(18, "years")}
      onChange={onChange}
    />
  )
}
