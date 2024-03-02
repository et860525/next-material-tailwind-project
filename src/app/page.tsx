import { Typography, Slider } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Typography variant="h2" className="text-red-800">
        Hello
      </Typography>
      <div>
        <Slider defaultValue={30} />
        <Slider defaultValue={30} className="text-teal-600" />
      </div>
    </main>
  );
}
