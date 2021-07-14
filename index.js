var nameInpt = document.getElementById('name');
var dateInpt = document.getElementById('date');
var amountInpt = document.getElementById('amount');
var addBtn = document.querySelector('.addBtn');
var hollow = document.getElementById('hollow');
var tab = document.querySelector('table');


addBtn.onclick = () => {
   {
      hollow.style = 'display: none';
      var tr = document.createElement('tr');
      var tdName = document.createElement('td');
      var tdDate = document.createElement('td');
      var tdAmount = document.createElement('td');
      var tdDelete = document.createElement('td')
      var delBtn = document.createElement('button');
      delBtn.textContent = 'Delete X';
      tdName.textContent = nameInpt.value;
      tdDate.textContent = dateInpt.value;
      tdAmount.textContent = amountInpt.value;
      tr.appendChild(tdName);
      tab.appendChild(tr);
      tr.appendChild(tdDate);
      tab.appendChild(tr);
      tr.appendChild(tdAmount);
      tab.appendChild(tr);
      tr.appendChild(tdDelete);
      tdDelete.appendChild(delBtn);
      tab.appendChild(tr);
      nameInpt.value = ''
      dateInpt.value = ''
      amountInpt.value = ''
      delBtn.onclick = () => tr.parentNode.removeChild(tr)
   }
}

