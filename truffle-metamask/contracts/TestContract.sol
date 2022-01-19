pragma solidity ^0.5.0;

contract TestContract {
  uint public counter = 0;

  constructor() public {
    IncrementCounter();
  }

  function IncrementCounter() public {
    counter ++;
  }

}