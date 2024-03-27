import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react"
import { Link as RouterLink } from "@remix-run/react"

export const Header = () => (
  <Navbar isBordered>
    <NavbarBrand>
      <p className="font-bold text-inherit">Mentor</p>
    </NavbarBrand>
    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
        <Link color="foreground" href="#">
          Main
        </Link>
      </NavbarItem>
      <NavbarItem isActive>
        <Link href="#" aria-current="page">
          Projects
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link color="foreground" href="#about">
          About
        </Link>
      </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
      <NavbarItem>
        <Button as={RouterLink} to="blog" color="primary" variant="flat">
          Blog
        </Button>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
)
