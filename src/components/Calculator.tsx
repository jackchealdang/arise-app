import { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import * as chrono from "chrono-node";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";

export function Calculator() {
  const now = new Date();
  const [textInput, setTextInput] = useState<string>("");
  const [hour, setHour] = useState<number>(now.getHours() % 12 || 12);
  const [minute, setMinute] = useState<number>(now.getMinutes());
  const isPM = now.getHours() > 12;

  function processTextInput() {
    const output = chrono.parseDate(textInput);
    if (output) {
      toast(output.toString());
    }
  }

  return (
    <Card className="w-[24rem]">
      <CardHeader>
        <p className="font-bold">Arise</p>
      </CardHeader>
      <CardContent>
        <p>
          Current time: {hour}:{minute} {isPM ? "PM" : "AM"}
        </p>
        <p>When would you like to wake up?</p>
        <Input
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <Button onClick={processTextInput}>Submit</Button>
      </CardContent>
    </Card>
  );
}
