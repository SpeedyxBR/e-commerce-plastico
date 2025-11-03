import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { ShoppingCartIcon } from "lucide-react";

const Header = () => {
  return (
    <Card className="flex justify-between items-center p-8 align-items-center">
      <Button size= "icon">
        <MenuIcon />
      </Button>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">E-COMMERCE</span> Plastico
      </h1>
      <Button size= "icon">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;