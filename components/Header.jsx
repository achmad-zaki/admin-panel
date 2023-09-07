import DropdownAccount from "./DropdownAccount"

const Header = () => {
    return (
        <header className="fixed top-0 bg-white border-b p-3.5 flex items-center justify-end w-full">
            <DropdownAccount />
        </header>
    )
}

export default Header