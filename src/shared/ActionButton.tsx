import React from "preact/compat"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"
type Props = {
  children:React.ReactNode;
  selectedPage: (value: SelectedPage)=>void;
}

const ActionButton = ({selectedPage, children}:Props) => {
  return (
    <AnchorLink 
      href={`#${SelectedPage.ContactUs}`}
      onClick={()=>selectedPage(SelectedPage.ContactUs)}
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
      {children}
    </AnchorLink>
  )
}

export default ActionButton
 