import * as React from "react";
import { Button,  } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons"


export function ContactUsButton() {
    return (
      <Button>
        <PlusIcon className="mr-2 h-4 w-4" /> 
        Contactanos
      </Button>
    );
}
