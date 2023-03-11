// jshint esversion:6
import { SearchBar as SearchBarAdmin, ListView } from "../../../components/admin"

function Home() {
    return (
        <div className="">
            <div className="w-full flex justify-center my-5">
                <SearchBarAdmin />
            </div>

            <div className="w-full mt-10 flex justify-center">
                <ListView />
            </div>
        </div>
    )
}

export { Home }