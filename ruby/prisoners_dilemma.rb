def simulate_prisoners_dilemma(player1, player2, rounds)
  history1 = []
  history2 = []
  score1 = 0
  score2 = 0

  # Default first moves
  move1 = player1[:first_move] || "cooperate"
  move2 = player2[:first_move] || "cooperate"

  rounds.times do |round|
    # Record history
    history1 << move1
    history2 << move2

    # Score round
    case [move1, move2]
    when ["cooperate", "cooperate"]
      score1 += 3
      score2 += 3
    when ["cooperate", "defect"]
      score1 += 0
      score2 += 5
    when ["defect", "cooperate"]
      score1 += 5
      score2 += 0
    when ["defect", "defect"]
      score1 += 1
      score2 += 1
    end

    # Get next move based on strategy rules
    move1 = player1[:strategy].call(history1, history2)
    move2 = player2[:strategy].call(history2, history1)
  end

  { player1: score1, player2: score2 }
end

# Tit-for-tat strategy
tit_for_tat = {
  first_move: "cooperate",
  strategy: ->(own_history, opp_history) {
    opp_history.last || "cooperate"
  }
}

# Always defect
always_defect = {
  first_move: "defect",
  strategy: ->(own_history, opp_history) {
    "defect"
  }
}

results = simulate_prisoners_dilemma(tit_for_tat, always_defect, 5)
puts results

def make_grudger
  grudge = false
  {
    first_move: "cooperate",
    strategy: ->(own_history, opp_history) {
      grudge ||= opp_history.last == "defect"
      grudge ? "defect" : "cooperate"
    }
  }
end

grudger = make_grudger
results = simulate_prisoners_dilemma(grudger, always_defect, 5)
puts results

