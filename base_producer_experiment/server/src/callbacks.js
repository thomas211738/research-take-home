import { ClassicListenersCollector } from "@empirica/core/admin/classic";
export const Empirica = new ClassicListenersCollector();

Empirica.onGameStart(({ game }) => {
  const round0 = game.addRound({
    name: "Advertise",
    task: "advertise",
  });

  round0.addStage({ name: "advertiseProduct", duration: 48000 });

  const round1 = game.addRound({
    name: "Results",
    task: "results",
  });
  round1.addStage({ name: "Result", duration: 140 });

  const round2 = game.addRound({
    name: "Advertise Again",
    task: "advertiseAgain",
  });
  round2.addStage({ name: "advertiseProduct", duration: 480 });

  const round3 = game.addRound({
    name: "Game Results",
    task: "gameResults",
  });
  round3.addStage({ name: "Result", duration: 140 });

});

Empirica.onRoundStart(({ round }) => {});

Empirica.onStageStart(({ stage }) => {});

Empirica.onStageEnded(({ stage }) => {
  calculateJellyBeansScore(stage);
});

Empirica.onRoundEnded(({ round }) => {});

Empirica.onGameEnded(({ game }) => {});

  