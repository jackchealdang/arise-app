import { Card, CardContent, CardHeader } from "./ui/card";

export function Calculator() {
  return (
    <Card className="w-[24rem]">
      <CardHeader>
        <p className="font-bold">Arise</p>
      </CardHeader>
      <CardContent>
        <p>When would you like to wake up?</p>
      </CardContent>
    </Card>
  );
}
