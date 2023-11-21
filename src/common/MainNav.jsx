import { MobileNav } from "./MobileNav"
import LaptopNav from "./LaptopNav"

const Nav = () => {
  return (
    <div className="shadow-lg py-4">
    <MobileNav/>
    <LaptopNav/>
    </div>
  )
}

export default Nav
