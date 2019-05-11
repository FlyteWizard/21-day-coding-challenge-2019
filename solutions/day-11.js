function setFrequency() {
  let low = radio.range.low;
  let high = radio.range.high;
  
  let frequency = ((low) + (high)) / 2;
  
  radio.frequency = frequency;
}
