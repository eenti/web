Oracles are a single point of failure and can make or break a DeFi protocol. They are reliable until a black swan event happens…

Unfortunately, crypto is a flock of black swans, so you better be prepared.

![](https://mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FyNzll8jScgGaLk9MUCT6g.png&w=1920&q=90)

## Are we talking about this again?

There are a plethora of resources to understand the importance of oracles. We recommend this [interview](https://www.youtube.com/watch?v=TPXTmVdlyoc) if you are interested.

But what’s the status quo of oracles? We know that no solution is perfect, but we must understand what’s going on in order to make informed decisions. We must be aware of the risks and act accordingly.

![](https://price-oracle.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4876b58d-7446-4f67-9a18-9b9485e53e6f%2FZpJ0fyHflctgsKya3yJEp.png?id=e98244cb-b285-4450-b12a-b37f15e7d98a&table=block&spaceId=de552277-5ae2-4d88-932f-dd538421d024&width=1360&userId=&cache=v2)

> _“But we have Chainlink! A decentralized solution that works like a charm”_

## Chainlink

**TL;DR:** Chainlink is the most widely used solution in DeFi. It’s the most reliable and cheap, but incentives for nodes are centralized and non-scalable, making the whole system permissioned.

![](https://price-oracle.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3fe5852e-1637-4b6f-a27c-70bba6e5f0b7%2Fchainlink.png?id=14295de7-90f9-4a83-acac-17e7d9fdb05b&table=block&spaceId=de552277-5ae2-4d88-932f-dd538421d024&width=2000&userId=&cache=v2)

- **Incentives are centralized:** Right now, incentives for data feeders are not decentralized since they rely on Chainlink, a centralized entity. They are subsidized and paid via LINK emissions from a multi-sig (an additional potential point of failure).
- **Incentives will keep being centralized:** [An upgrade](https://blog.chain.link/sustainably-growing-chainlink/) is scheduled for decentralizing these payments using a stake/slash mechanism. The Chainlink Node Operator [recently paid 30M LINK](https://etherscan.io/address/0x98c63b7b319dfbdf3d811530f2ab9dfe4983af9d#tokentxns) to bootstrap these mechanisms.
  - Notice this is still centralized/subsidized, and it’s relying on the assumption that eventually, users will sponsor data feeders
  - This is not sustainable in the long run
  - What happens if Chainlink stops working? (regulations / prolonged bear market / mismanagement / etc.)
- **Corruption risk:** Nodes are in charge of billions of dollars in DeFi, which is [dangerous even with slashing mechanisms](https://ercwl.medium.com/whats-wrong-with-the-chainlink-2-0-whitepaper-for-simpletons-d50f27049464).
  - Even if unlikely, there is room for censorship/bribery and extortion.
  - Nodes monopolize MEV: even though we can’t say this is a corrupted procedure, it is an undesirable property of a decentralized system.
- **Scaling tension:** Reward system is not compatible with scaling
  - The more nodes on the system (more decentralized), the more rewards dilute for each of them.
  - The more data fed into the system, the more rewards dilute for each node.
- **Permissioned:** As a result of the scaling tension, incentivized Data feeds are whitelisted.
  - Anyone can create an oracle for their token, which will work as long as it gets paid. Maintaining its keepers in the long term is extremely expensive.

There are also issues with the API, [software](https://www.cryptotimes.io/venus-protocol-loses-11m-after-chainlinks-suspension-of-luna-value/), and [gas](https://twitter.com/nomorebear/status/1238153064751628291) dependence.

> _“Well, at least Maker secures its $8b billion with a custom-made oracle. We can copy that model, right? right?”_

## Maker’s solution

**TLDR:** Maker’s internal oracle, which defends more than $8b, is expensive to maintain and therefore, not efficient for scale.

![](https://price-oracle.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F15d3b0a6-415c-4744-9ce3-94d062483710%2Fmaker.png?id=da3a9a84-58a0-4934-9e89-d9ce1cdbf7e5&table=block&spaceId=de552277-5ae2-4d88-932f-dd538421d024&width=2000&userId=&cache=v2)

Maker uses their oracle to report collaterals’ prices in the protocol. Although this oracle is not designed to be used by other protocols, we might consider using the same methodology on our protocol, right?

- **Unsustainable:** Having an entire network of keepers frequently updating costs requires gas subsidies and enough incentives to make this task worthwhile. This might not be an issue [for Maker](https://twitter.com/bantg/status/1431593857423118342) but it is for small and medium protocols.
- **Gas dependance**: Maker also had issues with [gas](https://insights.glassnode.com/what-really-happened-to-makerdao/) dependence.

> _“Uniswap is full of Giga brains; Uniswap v3 must be the solution!”_

## Uniswap v3

**TLDR:** Uniswap v3 introduced a novel way of querying price data. It is decentralized and sustainable (thanks to swappers and LP’s subsidies), but it is complicated to rely on due to liquidity’s unpredictability.

![](https://price-oracle.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9a222962-0761-4d60-8378-0e7e315983bc%2Funi_v3.png?id=84a2b924-f40b-41a6-9148-f9db42277f0c&table=block&spaceId=de552277-5ae2-4d88-932f-dd538421d024&width=2000&userId=&cache=v2)

Uniswap has the most decentralized and sustainable solution for oracles, but it also has a long track of exploits and manipulations. This improved after v3, but it’s [still happening](https://twitter.com/raricapital/status/1455569653820973057), and it’s prone to a PoS multi-block attack.

- **Trust issues:** Oracle quality depends on pool’s liquidity, but that depends on external providers.
  - Most [LPs stay for as long as it’s profitable](https://twitter.com/FloatProtocol/status/1482184042850263042), making it hard for the users of the oracle to predict the oracle’s future status.
  - Even protocols that provide liquidity for their own token might decide to remove liquidity for a set of different reasons at any time.
- **Complexity:** Concentrated liquidity is a double-edged sword. It enormously increases capital efficiency for LPs, but it also makes manipulation easier.
  - Many protocols willing to have an oracle do not fully understand how Uniswap works. They either opt out or get rekt.
- **Multi-block attack:** With the recent move from PoW to PoS consensus on Ethereum, predictability on block proposers was also introduced. Chances are that some big players will propose multiple blocks in a row with [high frequency](https://alrevuelta.github.io/posts/ethereum-mev-multiblock). A potential attack on Uniswap TWAP could consist of price manipulation while leaving out of the blocks any external arbitrage, hence doing this for free (minus trading fees).

Medians were [suggested](https://github.com/euler-xyz/median-oracle) several times as an alternative to the standard TWAP to filter away multi-block attacks. But:

- Median filters away fast movements but cannot differentiate manipulations from legitimate price swings.
- Medians are always laggier than TWAPs (see Uniswap below), as they take longer to react.
- Medians are not smooth, a desirable property for many use cases (Dutch auction liquidations, for instance).

## The solution

**Price** is a permissionless and reliable solution that leverages UniV3 and keeper automation to provide safe price quotes on any existing token.

![](https://price-oracle.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fecf4b512-8dee-417a-ae99-84214200a0da%2Fprice.png?id=7ac05301-00ef-4e55-a4e8-3b9802276a5e&table=block&spaceId=de552277-5ae2-4d88-932f-dd538421d024&width=2000&userId=&cache=v2)

Price is built on top of Uniswap v3, thus inheriting all its decentralization and sustainable features. In addition, it solves the issues we marked above:

- **Trust issues:** Price makes liquidity trustworthy and predictable for the oracle’s users.
- **Complexity:** Everything is managed by smart contracts. We created a hassle-free experience for our users.
- **Multi-block attacks:** Price uses automation to detect and correct price manipulations, including multi-block attacks. These corrections unlock safer, more precise TWAPs, even for short time frames.

![](https://price-oracle.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Faa7e5aeb-76d9-4cf3-a91e-01d80b165075%2Fend.png?id=381a2f94-dd81-4b45-93d6-d1d02fb3070d&table=block&spaceId=de552277-5ae2-4d88-932f-dd538421d024&width=2000&userId=&cache=v2)

### **And the best of it all? Price is just around the corner…**

The alpha release is scheduled for January 2023. You can find many more details in the [docs](https://docs.oracles.rip/)
