//* include the moment
var moment = require('moment');
//* include the model
const Customer = require('../models/customer');


//Get Function 
const index = (req, res) => {
    //? show the the message in the browser
    //*   res.send('<h1>Hello World!</h1>'+'<p>Mido shriks i can do it</p>')

    //? show the the message file in the browser
    //* //res.sendFile("./views/home.html", { root: __dirname });

    // ? show the the message file by Ejs in the browser
    //// MyData.find()
    ////    .then((result) => {
    //         // res.sendFile("./views/users/index.html", { root: __dirname });
    //         res.render('home', { title: 'Home Page', arr: result });
    //         //* console.log(result)
    //     })
    ////     .catch((err) => {
    ////         console.log(err)
    //     })

    // ? show the the message demo by Ejs in the browser
    Customer.find()
        .then((result) => {
            res.render('index', { title: 'All Users', customers: result, moment: moment });
            //* console.log(result)
        })
        .catch((err) => {
            console.log(err)
        })
    //// res.render('index', {});
}

const add = (req, res) => {
    var country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

    res.render("user/add", { title: 'Add Customer', countries: country_list });
}

const edit = (req, res) => {
    //* res.render("user/edit");
    var country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

    Customer.findById(req.params.id)
        .then((result) => {
            res.render('user/edit', { title: 'Customer', customer: result, moment: moment, countries: country_list });
            //* console.log(result)
        })
        .catch((err) => {
            console.log(err)
        })
}

// Variable Function
const view = (req, res) => {
    //* res.render("user/view");
    Customer.findById(req.params.id)
        .then((result) => {
            res.render('user/view', { title: 'Customer', customer: result, moment: moment });
            //* console.log(result)
        })
        .catch((err) => {
            console.log(err)
        })
}

// Post Function
const story = (req, res) => {
    //? console.log(req.body);
    //? const customer = new Customer(req.body);
    //? customer.save()
    Customer.create(req.body)
        .then((result) => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
}

const search = (req, res) => {
    const searchText = req.body.search.trim();
    console.log(searchText);
    Customer.find({ $or: [{ firstname: searchText }, { lastname: searchText }] })
        // age: { $gte: req.body.search },
        .then((result) => {
            console.log(result);
            //* res.redirect('/');
            res.render('user/search', { search: result, moment: moment });
        }).catch((err) => {
            console.log(err);
        })
}

// Put Function
const update = (req, res) => {
    //? console.log(req.body);
    // Customer.findByIdAndUpdate(req.params.id, req.body)
    Customer.updateOne({ _id: req.params.id }, req.body)
        .then((result) => {
            console.log(result, req.params.id, req.body);

            // console.log(result);
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
}

// Delete Function
const destroy = (req, res) => {
    //? Customer.findByIdAndDelete(req.params.id)
    //?     .then((result) => {
    //?         res.redirect('/');
    //?     })
    Customer.deleteOne({ _id: req.params.id }).then((result) => {
        res.redirect("/");
    }).catch((err) => {
        console.log(err);
    });
}


module.exports = { index, add, edit, view, story, search, update, destroy };


