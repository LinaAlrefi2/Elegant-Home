function redirectToProductPage(product) {
  switch (product) {
    case 'distinctive':
      window.location.href = 'Distinctive.html';
      break;
    case '4piece':
      window.location.href = 'piece.html';
      break;
    case 'triple':
      window.location.href = 'Triple.html';
      break;
      case 'Wood':
        window.location.href = 'Wood.html';
        break;
        case 'Floor':
          window.location.href = 'Floor.html';
          break;
    
          case 'both':
            window.location.href = 'both.html';
            break;
  
    default:
      break;
  }
}
  
  function showAvailabilityNotice() {
    alert('This product is currently unavailable.');
  }
  function showcard() {
    window.location.href = 'card.html';
  }

