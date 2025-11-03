import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ListOrderedIcon, LogInIcon, MenuIcon, PercentIcon, HomeIcon} from "lucide-react";
import { ShoppingCartIcon } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const Header = () => {
  return (
    <Card className="flex justify-between items-center p-8 align-items-center">
     <Sheet >
        <SheetTrigger asChild>
     <Button size= "icon">
        <MenuIcon />
      </Button>
      </SheetTrigger> 

      <SheetContent side="left">
        <SheetHeader className="text-left">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <div className="mt-2 flex flex-col gap-2">
          <Button className="w-full justify-start gap-2">
            <LogInIcon size={16} />
            Fazer Login
          </Button>

          <Button className="w-full justify-start gap-2">
            <HomeIcon size={16}  />
            Início
          </Button>

          <Button className="w-full justify-start gap-2">
            <PercentIcon size={16}  />
            Ofertas
          </Button>

          <Button className="w-full justify-start gap-2">
            <ListOrderedIcon size={16}  />
            Catálogo 
          </Button>
        
        </div>

      </SheetContent>
      </Sheet>

      

      <h1 className="text-lg font-semibold">
        <span className="text-primary">ECO</span> Plástico
      </h1>
      <Button size= "icon">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;