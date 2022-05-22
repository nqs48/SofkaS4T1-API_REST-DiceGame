var express = require("express");
var router = express.Router();
var gameCtrl = require("../controllers/games");
var Game = require("../models/game");
var Player = require("../models/player");


//Metodo Get para buscar juegos
router.get("/:id", async function (req, res) {
  // res.render("findGame");
  const id = req.params.id;
  try {
    const game = await Game.findById(id);
    res.render("detailsGame", { game, error: false });
    // res.send(game)
  } catch (error) {
    console.error("Error: " + error.message);
    res.render("detailsGame", {
      error: true,
      mensaje: "No se encuentra el ID seleccionado",
    });
  }
});

router.get("/:id/winner", async function (req, res) {
  // res.render("findGame");
  const id = req.params.id;
  try {
    const game = await Game.findById(id);
    res.render("winnerGame", { game, error: false });
    // res.send(game)
  } catch (error) {
    console.error("Error: " + error.message);
    res.render("winnerGame", {
      error: true,
      mensaje: "No se encuentra el ID seleccionado",
    });
    // res.send("No se encuentra el ID seleccionado");
  }
});

// //Metodo para eliminar juegos
// router.get("/:id", async function (req, res) {
//   const id = req.params.id;
//   console.log(id)
//   try {

//     const game = await Game.findByIdAndDelete(id);
//     res.render("confirmation",{game, estado:" Eliminado" })
//     // if (game) {
//     //   res.send("Game deleted!!");
//     // } else {
//     //   res.send("Something went wrong!!");
//     // }

//   } catch (err) {
//     console.log(err);
//   }
// });

// router.get("winner/:id", async function (req, res) {
//   // res.render("findGame");
//   const id = req.params.id;
//   console.log(id);
//   try {
//     const game = await Game.findById(id);
//     res.render("winnerGame", { game, error: false });
//     // res.send(game)
//   } catch (error) {
//     console.error("Error: " + error.message);
//     // res.render("winnerGame", {
//     //   error: true,
//     //   mensaje: "No se encuentra el ID seleccionado",
//     // });
//   }
// });

//CREACION DE METODO PUT EN PROGRESO
// router.put("/:id", async(req, res) => {
//   const id = req.params.id;
//   try {
//     const game = Game.findByIdAndUpdate(id)
//     game.gamers.player1.score = 3;
//     game.gamers.player2.score = 3;
//     game.gamers.player3.score= 3;
//     game.inProgress= false;
//       game: {
//         gamers: {
//           player1: {
//             score:3,
//           },
//           player2: {
//               score:4,
//           },
//           player3: {
//               score:6,
//           }}
//           ,
//           inProcess:false
//         }

//     res.send(game);
//   } catch (error) {
//     console.log(error);
//   }

// })

//Métodos REST optimizados

// router.route("/").get(gameCtrl.findAllGames)
// router.route("/findGame").get(gameCtrl.findById);
// router.route("/findGame/:id").put(gameCtrl.updateGame);
// router.route("/findGame/:id").delete(gameCtrl.deleteGame);

module.exports = router;
