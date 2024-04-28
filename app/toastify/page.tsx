'use client'
import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { toast } from "react-toastify";

export default function ToastifyPage() {
  const notify = () => toast("Wow so easy !");
  return (
    <div>
      <h1 className={title()}>Toastify</h1>
	  <br />
      <Button color="primary" onClick={() => notify()}>
        Button
      </Button>
    </div>
  );
}
