// jshint esversion:6
import { SearchBar as SearchBarAdmin } from "../../../components/admin"

function Home() {
    return (
        <div className="">
            <div className="w-full flex justify-center my-5">
                <SearchBarAdmin />
            </div>
        </div>
    )
}

export { Home }