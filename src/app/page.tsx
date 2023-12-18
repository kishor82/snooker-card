import Timer from "@/components/Timer";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex h-max flex-col justify-around border-solid border-4 border-cyan-950  p-4 rounded-md">
        <h2>Welcome to Snooker board</h2>
        <Button />
      </div>
    </main>
  );
}
