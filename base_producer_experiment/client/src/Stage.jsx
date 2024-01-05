import {
  usePlayer,
  usePlayers,
  useRound,
} from "@empirica/core/player/classic/react";
import { Loading } from "@empirica/core/player/react";
import React from "react";
import { JellyBeans } from "./examples/JellyBeans";
import { MineSweeper } from "./examples/MineSweeper";
import { Advertisement } from "./examples/Advertise";
import { SalesResults } from "./examples/Results";




export function Stage() {
  const player = usePlayer();
  const players = usePlayers();
  const round = useRound();

  if (player.stage.get("submit")) {
    if (players.length === 1) {
      return <Loading />;
    }

    return (
      <div className="text-center text-gray-400 pointer-events-none">
        Please wait for other player(s).
      </div>
    );
  }

  switch (round.get("task")) {
    case "advertise":
      return <Advertisement />; 
    case "results":
      return <SalesResults />;
    case "advertiseAgain":
      return <Advertisement />; 
    case "gameResults":
      return <SalesResults />;
    

    default:
      return <div>Unknown task</div>;
  }
}
