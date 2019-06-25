const persons = [
    {
        name: 'Վահագն Գևորգյան',
        role: 'Փոխտնօրեն',
        phone: '+(374)77 19 03 22',
        email: 'vgevorgyan@dalma.am',
    },
    {
        name: 'Դավիթ Հովհաննիսյան',
        role: 'Գործերի կառավարիչ',
        phone: '+(374)77 19 05 22',
        email: 'davitdalma@mail.am',
    },
    {
        name: 'Ռազմիկ Քարամյան',
        role: 'Մարքեթինգ',
        phone: '+(374)43 01 77 24',
        email: 'marketing@dalma.am',
    },
    {
        name: 'Մանե Գրիգորյան',
        role: 'Թվային մարքեթինգ(Facebook, Instagram, Կայք, Հավելված)',
        phone: '+(374)94 51 91 04',
        email: 'social@dalma.am',
    },
    {
        name: 'Եվա Հակոբյան',
        role: 'Հաշվապահություն',
        phone: '+(374)93 53 06 30',
        email: 'accountant@dalma.am',
    },
    {
        name: 'Գրետա Մելքոնյան',
        role: 'Իրավաբան',
        phone: '+(374)77 99 80 04',
        email: 'lawyer@dalma.am',
    },
    {
        name: 'Արթուր Ժամարյան',
        role: 'IT մասնագետ',
        phone: '+(374)77 78 88 87',
        email: 'admin@dalma.am',
    },
    {
        name: 'Գրիգոր Մանդալյան',
        role: 'Էլեկտրիկ',
        phone: '+(374)77 19 03 31',
        email: '',
    },
    {
        name: 'Վիկտորիա Հակոբյան',
        role: 'Մաքրություն',
        phone: '+(374)77 19 00 41',
        email: '',
    },
    {
        name: 'Դավիթ Կիրակոսյան',
        role: 'Անվտանգություն',
        phone: '+(374)77 30 15 44',
        email: '',
    },
];

const messages = {
    'customer-name': 'Հարգելի գործընկեր',
    'welcome-message': 'Բարի գալուստ Դալմա Գարդեն Մոլ:',
    'congrats': 'Շնորհավորում ենք Ձեր խանութ-սրահի բացման կապակցությամբ: <br> Հուսով ենք մեր համագործակցությունը կլինի երկար և արդյունավետ:',
    'contacts-header': 'Ձեզ ենք փոխանցում մեր աշխատակազմի կոնտակտային տվյալները.',
    'footer-message-top': 'Պատրաստ ենք սիրով աշխատել Ձեզ հետ և Ձեզ համար:',
    'footer-message-bottom': 'Հարգանքով` Դալմա թիմ',
};

function generateMessages() {
    Object.keys(messages).forEach(key => {
        const field = generateMessageField(key);
        document.getElementById('messages').appendChild(field);
    });
    drawMessagesOnTemplate();
}

function generateMessageField(key) {
    const messageFieldContainer = document.createElement('div');
    messageFieldContainer.classList.add('d__message-field-container');

    const label = document.createElement('label');
    label.setAttribute('for', key);
    label.innerHTML = key.replace(/[-]/g, " ");
    messageFieldContainer.appendChild(label);

    const textarea = document.createElement('textarea');
    textarea.value = messages[key];
    textarea.id = key;
    textarea.setAttribute('rows', '2');
    messageFieldContainer.appendChild(textarea);

    return messageFieldContainer;
}

function generate() {
    drawMessagesOnTemplate();
    drawPersonsOnTemplate();
    const template = `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml">

        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body>
            ${document.getElementById('preview').innerHTML}
        </body>
        </html>
    `;
    document.getElementById('finalTemplate').value = template;
    openModal();
}

function drawMessagesOnTemplate() {
    const customerName = document.getElementById('customer-name').value;
    document.getElementById('customerName').innerHTML = customerName;

    const welcomeMessage = document.getElementById('welcome-message').value;
    document.getElementById('welcomeMessage').innerHTML = `<strong>${welcomeMessage}</strong>`;

    const congratsMessage = document.getElementById('congrats').value;
    document.getElementById('congratsMessage').innerHTML = congratsMessage;

    const contactsHeader = document.getElementById('contacts-header').value;
    document.getElementById('contactsHeader').innerHTML = contactsHeader;

    const footerMessageTop = document.getElementById('footer-message-top').value;
    document.getElementById('footerMessageTop').innerHTML = footerMessageTop;

    const footerMessageBottom = document.getElementById('footer-message-bottom').value;
    document.getElementById('footerMessageBottom').innerHTML = footerMessageBottom;
}

function addPerson() {
    persons.push({
        name: '',
        role: '',
        phone: '',
        email: '',
    });
    redrawPersons();
}

function generateFields() {
    persons.forEach((person, i) => {
        document.getElementById('persons').appendChild(generateRow(person, i));
    });
    drawPersonsOnTemplate();
}

function generateRow(person, index) {
    const row = document.createElement('div');
    const remove = document.createElement('button');
    remove.innerHTML = 'x';
    remove.classList.add('d__remove');
    remove.addEventListener('click', () => {removePerson(index)});
    row.classList.add('d__row');
    ['name', 'role', 'phone', 'email'].forEach((label) => {
        row.appendChild(createInputField(person[label], `inputField_${label}_${index}`, label));
    });
    row.appendChild(remove);
    return row;
}

function removePerson(index) {
    persons.splice(index, 1);
    redrawPersons();
}

function redrawPersons() {
    document.getElementById('persons').innerHTML = '';
    generateFields();
}

function createInputField(value, id, labelText) {
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('d__input-container');
    
    const label = document.createElement('label');
    label.innerHTML = labelText;
    label.setAttribute('for', id);
    inputContainer.appendChild(label);

    const input = document.createElement('input');
    input.id = id; 
    input.value = value;
    inputContainer.appendChild(input);
    return inputContainer;
}

function drawPersonsOnTemplate() {
    const tbody = document.createElement('tbody');
    persons.forEach((person, index) => {
        const tableRow = document.createElement('tr');
        tableRow.appendChild(generatePersonIconContainer());
        tableRow.appendChild(generatePersonDetails(index));
        tbody.appendChild(tableRow);
        
    });
    const table = document.getElementById('personsTable');
    table.innerHTML = '';
    table.appendChild(tbody);
}

function getFieldValue(label, index) {
    return document.getElementById(`inputField_${label}_${index}`).value;
}

function generatePersonDetails(index) {
    const td = document.createElement('td');
    td.setAttribute('style', 'padding-left:20px;padding-top:20px;padding-bottom:20px; font-size: 14px');
    
    const name = document.createElement('p');
    name.setAttribute('style', 'margin-top:0;margin-bottom:0;');
    name.innerHTML = `<strong>${getFieldValue('role', index) + '`'} ${getFieldValue('name', index)}</strong>`;
    td.appendChild(name);

    const phone = document.createElement('p');
    phone.setAttribute('style', 'padding-top:5px;padding-bottom:5px;margin-top:0;margin-bottom:0;');
    const phoneLink = document.createElement('a');
    phoneLink.setAttribute('style', 'text-decoration: none !important; color: #000000 !important;');
    phoneLink.setAttribute('href', `tel:${getFieldValue('phone', index).replace(/[()-\s]/g, "")}`);
    phoneLink.innerHTML = getFieldValue('phone', index);
    phone.appendChild(phoneLink);
    td.appendChild(phone);

    const email = document.createElement('p');
    email.setAttribute('style', 'margin:0;padding:0');
    const emailLink = document.createElement('a');
    emailLink.setAttribute('style', 'text-decoration: none !important; color: #000000 !important;');
    emailLink.setAttribute('href', `mailto:${getFieldValue('email', index)}`);
    emailLink.innerHTML = getFieldValue('email', index);
    email.appendChild(emailLink);
    td.appendChild(email);

    return td;
}

function generatePersonIconContainer() {
    const td = document.createElement('td');
    td.setAttribute('width', '60px');
    td.appendChild(generatePersonIcon());
    return td;
}

function generatePersonIcon() {
    const icon = document.createElement('img');
    icon.setAttribute('src', 'https://res.cloudinary.com/dgjy6axdi/image/upload/v1560966773/icon_jg77hi.jpg');
    icon.setAttribute('style', 'width: 100%; height:auto');
    return icon;
}

function openModal() {
    document.getElementById('modal').classList.add('open');
}

function closeModal() {
    document.getElementById('modal').classList.remove('open');
}

(() => {
    generateMessages();
    generateFields();
})()
