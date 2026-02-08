meal_balances = {
    "STUDENT_WALLET_ABC123": 10
}

def get_balance(wallet):
    return meal_balances.get(wallet, 0)

def consume_meal(wallet):
    if meal_balances.get(wallet, 0) > 0:
        meal_balances[wallet] -= 1
        return "Meal consumed successfully"
    return "Insufficient meal balance"

def create_meal_token():
    return "MEAL token created on Algorand TestNet (simulated)"
