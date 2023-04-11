// jshint esversion:6
import { PositionData } from "../../data/admin";

function getUserPosition(id: string) {
    return PositionData.find((user) => user.id === id);
}

export { getUserPosition }