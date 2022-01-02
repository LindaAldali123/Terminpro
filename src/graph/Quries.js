import axios from 'axios';
async function sendtoserver(url, query, token = null, typereq = 'POST') {
    var myheaders;
    if (token !== null) {
        myheaders = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer: ${token}`,
        };
    } else {
        myheaders = {
            'Content-Type': 'application/json',
        };
    }
    try {
        var result = await axios({
            method: typereq,
            headers: myheaders,
            url: url,
            data: query,
        }).catch(function (error) {
            if (error.response) {
                console.clear();
                // result = error.response.data
                //status = error.response.status
                console.log(error.response.data);
                console.log(error.response.status);
                return [error.response.status, error.response.data];
            }
        });
        return result;
    } catch (error) {
        console.log(error);
    }
}
async function loginadmin(email, password) {
    var query = {
        email: email,
        password: password,
    };
    var urlloginadmin = 'https://terminpr-linda.herokuapp.com/api/admin/login';
    var resultad = await sendtoserver(urlloginadmin, query);
    return resultad;
}
async function login(email, password) {
    var query = {
        email: email,
        password: password,
    };
    var urllogin = 'https://terminpr-linda.herokuapp.com/api/user/login';
    var result = await sendtoserver(urllogin, query);
    return result;
}
async function register(type, email, password, fname, lname, city, country, location, numb, phon, phon2, page) {
    var query = {
        "type": type,
        "email": email,
        "firstName": fname,
        "lastName": lname,
        "password": password,
        address: {
            "country": country,
            "city": city,
            "location": location,
            "building": numb
        },
        "phone_1": phon,
        "phone_2": phon2,
        "urls": {
            "facebook": page
        }
    };
    var urlreg = 'https://terminpr-linda.herokuapp.com/api/user/signup';
    var result1 = await sendtoserver(urlreg, query);
    return result1;
}
async function updateuser(token, userid, fname, lname, city, country, location, numb, phon, phon2, page) {
    var query = {
        "firstName": fname,
        "lastName": lname,
        address: {
            "country": country,
            "city": city,
            "location": location,
            "building": numb
        },
        "phone_1": phon,
        "phone_2": phon2,
        "urls": {
            "facebook": page
        }
    };
    var urlupu = `https://terminpr-linda.herokuapp.com/api/user/${userid}`;
    var resultupu = await sendtoserver(urlupu, query, token, 'PUT');
    return resultupu;
}
async function updphotouser(token, userid, photo) {
    var query = {
        "photo": photo
    };
    var urlupu = `https://terminpr-linda.herokuapp.com/api/user/${userid}/photo`;
    var resultupu = await sendtoserver(urlupu, query, token, 'PUT');
    return resultupu;
}
async function updphotoins(token, id, photo) {
    var query = {
        "photo": photo
    };
    var urlupu = `https://terminpr-linda.herokuapp.com/api/institution/${id}/photo`;
    var resultupu = await sendtoserver(urlupu, query, token, 'PUT');
    return resultupu;
}
async function addadmin(token, email, password, fname, lname) {
    var query = {
        "email": email,
        "firstName": fname,
        "lastName": lname,
        "password": password,
    };
    var urladmin = 'https://terminpr-linda.herokuapp.com/api/admin';
    var resultadm = await sendtoserver(urladmin, query, token);
    return resultadm;
}
async function addcate(token, name, image) {
    var query = {
        "name": name,
        "image": image,
    };
    var urladm = 'https://terminpr-linda.herokuapp.com/api/admin/category';
    var resultadmin = await sendtoserver(urladm, query, token);
    return resultadmin;
}
async function addinsitution(
    token,
    owner,
    email,
    name,
    subtitle,
    description,
    category,
    subcat,
    photos,
    country,
    city,
    phone,
    photo,
    creditCard,
    openingDays,
    openAt,
    closeAt
) {
    var query = {
        "owner": owner,
        "email": email,
        "name": name,
        "subtitle": subtitle,
        "description": description,
        "category": category,
        "subCategory": subcat,
        "slider": photos,
        address: {
            "country": country,
            "city": city,
        },
        "phone": phone,
        "photo": photo,
        "paypalEmail": creditCard,
        "openingDays": openingDays,
        "openAt": openAt,
        "closeAt": closeAt,
    };
    var urlins = 'https://terminpr-linda.herokuapp.com/api/institution';
    var result2 = await sendtoserver(urlins, query, token);
    return result2;
}
async function updateins(
    token,
    insid,
    // owner,
    //email,
    name,
    subtitle,
    description,
    category,
    subcat,
    //photos,
    country,
    city,
    phone,
    // photo,
    creditCard,
    openingDays,
    openAt,
    closeAt) {
    var query = {
        //"owner": owner,
        //"email": email,
        "name": name,
        "subtitle": subtitle,
        "description": description,
        "category": category,
        "subCategory": subcat,
        //"slider": photos,
        address: {
            "country": country,
            "city": city,
        },
        "phone": phone,
        //"photo": photo,
        "paypalEmail": creditCard,
        "openingDays": openingDays,
        "openAt": openAt,
        "closeAt": closeAt,
    };
    var urlui = `https://terminpr-linda.herokuapp.com/api/institution/${insid}`;
    var resultui = await sendtoserver(urlui, query, token, 'PUT');
    return resultui;
}
async function addservic(
    token,
    ins,
    nam,
    cate,
    descrip,
    tim,
    pric,
    ret
) {
    var query = {
        "institution": ins,
        "name": nam,
        "category": cate,
        "description": descrip,
        "length": tim,
        "price": pric,
        "retainer": ret,
    };
    var urlser = 'https://terminpr-linda.herokuapp.com/api/service';
    var result3 = await sendtoserver(urlser, query, token);
    return result3;
}
async function updateser(
    token,
    id,
    // ins,
    nam,
    cate,
    descrip,
    tim,
    pric,
    ret
) {
    var query = {
        //"institution": ins,
        "name": nam,
        "category": cate,
        "description": descrip,
        "length": tim,
        "price": pric,
        "atLeast": true,
        "retainer": ret,
        "hasRetainer": true
    };
    var urlui = `https://terminpr-linda.herokuapp.com/api/service/${id}`;
    var resultui = await sendtoserver(urlui, query, token, 'PUT');
    return resultui;
}
async function addemp(
    token,
    insd,
    emai,
    fnm,
    lnm,
    pas,
    spec,
    photo
) {
    var query = {
        "institution": insd,
        "email": emai,
        "firstName": fnm,
        "lastName": lnm,
        "password": pas,
        "specialty": spec,
        "photo": photo,
    };
    var urlemp = 'https://terminpr-linda.herokuapp.com/api/employee';
    var result4 = await sendtoserver(urlemp, query, token);
    return result4;
}
async function updateemp(
    token,
    id,
    insd,
    // emai,
    fnm,
    lnm,
    pas,
    spec,
    // photo
) {
    var query = {
        "institution": insd,
        //"email": emai,
        "firstName": fnm,
        "lastName": lnm,
        "password": pas,
        "specialty": spec,
        //"photo": photo,  
    };
    var urlui = `https://terminpr-linda.herokuapp.com/api/employee/${id}`;
    var resultui = await sendtoserver(urlui, query, token, 'PUT');
    return resultui;
}
async function getins(limit) {
    var query = {

    };
    var urlget = `https://terminpr-linda.herokuapp.com/api/institution?limit=${limit}`;
    var result5 = await sendtoserver(urlget, query, null, 'GET');
    return result5;
}
async function getcate() {
    var query = {

    };
    var urlcat = `https://terminpr-linda.herokuapp.com/api/admin/category`;
    var result6 = await sendtoserver(urlcat, query, null, 'GET');
    return result6;
}
async function getplan() {
    var query = {

    };
    var urlpl = `https://terminpr-linda.herokuapp.com/api/plan`;
    var resultp = await sendtoserver(urlpl, query, null, 'GET');
    return resultp;
}
async function getinsid(insitutionid) {
    var query = {

    };
    var urlinsid = `https://terminpr-linda.herokuapp.com/api/institution/${insitutionid}`;
    var result7 = await sendtoserver(urlinsid, query, null, 'GET');
    return result7;
}
async function forgetpass(email) {
    var query = {
        "email": email
    };
    var urlforg = `https://terminpr-linda.herokuapp.com/api/user/forgetPassword`;
    var result8 = await sendtoserver(urlforg, query, null, 'PUT');
    return result8;
}
async function verfiya(token, id, code) {
    var query = {
        "code": code
    };
    var urlver = `https://terminpr-linda.herokuapp.com/api/user/${id}/verify`;
    var resultv = await sendtoserver(urlver, query, token, 'PUT');
    return resultv;
}
async function resetpass(token, pass) {
    var query = {
        "password": pass
    };
    var urlreset = `https://terminpr-linda.herokuapp.com/api/user/resetPassword/${token}`;
    var result9 = await sendtoserver(urlreset, query, token, 'PUT');
    return result9;
}
async function getemp(insitutionid) {
    var query = {

    };
    var urlem = `https://terminpr-linda.herokuapp.com/api/employee/${insitutionid}/all`;
    var result10 = await sendtoserver(urlem, query, null, 'GET');
    return result10;
}
async function getuser(userid) {
    var query = {

    };
    var urlusr = `https://terminpr-linda.herokuapp.com/api/user/${userid}`;
    var resultusr = await sendtoserver(urlusr, query, null, 'GET');
    return resultusr;
}
async function getser(insitutionid) {
    var query = {

    };
    var urlem = `https://terminpr-linda.herokuapp.com/api/service/${insitutionid}/all`;
    var result11 = await sendtoserver(urlem, query, null, 'GET');
    return result11;
}
async function getserbyid(sid) {
    var query = {

    };
    var urlis = `https://terminpr-linda.herokuapp.com/api/service/${sid}`;
    var resultr = await sendtoserver(urlis, query, null, 'GET');
    return resultr;
}
async function getempbyid(eid) {
    var query = {

    };
    var urle = `https://terminpr-linda.herokuapp.com/api/employee/${eid}`;
    var resultr = await sendtoserver(urle, query, null, 'GET');
    return resultr;
}
async function addplan(
    token,
    pname,
    psku,
    pdes,
    ppri,
    pempl,
    pserl,
    ptim
) {
    var query = {
        "name": pname,
        "sku": psku,
        "description": pdes,
        "price": ppri,
        "employeeLimit": pempl,
        "serviceLimit": pserl,
        "length": ptim,
        "available": true
    };
    var urlplan = 'https://terminpr-linda.herokuapp.com/api/plan';
    var result12 = await sendtoserver(urlplan, query, token);
    return result12;
}
async function deletcate(token, cid) {
    var query = {

    };
    var urldel = `https://terminpr-linda.herokuapp.com/api/admin/category/${cid}`;
    var resultdd = await sendtoserver(urldel, query, token, 'DELETE');
    return resultdd;
}
async function deletplan(token, pid) {
    var query = {

    };
    var urldel = `https://terminpr-linda.herokuapp.com/api/plan/${pid}`;
    var resultdd = await sendtoserver(urldel, query, token, 'DELETE');
    return resultdd;
}
async function subscrib(id, insid, token) {
    var query = {
        "id": id
    };
    var urls = `https://terminpr-linda.herokuapp.com/api/institution/${insid}/subscribe`;
    var results = await sendtoserver(urls, query, token, 'PUT');
    return results;
}
async function unsubscrib(insid, token) {
    var query = {
        // "id": id
    };
    var urlu = `https://terminpr-linda.herokuapp.com/api/institution/${insid}/unsubscribe`;
    var resultu = await sendtoserver(urlu, query, token, 'PUT');
    return resultu;
}
async function updphotoemp(token, eid, photo) {
    var query = {
        "photo": photo
    };
    var urlue = `https://terminpr-linda.herokuapp.com/api/employee/${eid}/photo`;
    var resultupu = await sendtoserver(urlue, query, token, 'PUT');
    return resultupu;
}
async function getinscat(cat) {
    var query = {

    };
    var urlcat = `https://terminpr-linda.herokuapp.com/api/institution?cat=${cat}`;
    var resultc = await sendtoserver(urlcat, query, null, 'GET');
    return resultc;
}
async function addimgs(token, id, photo) {
    var query = {
        "image": photo
    };
    var urlim = `https://terminpr-linda.herokuapp.com/api/institution/${id}/slider`;
    var resultim = await sendtoserver(urlim, query, token, 'PUT');
    return resultim;
}
async function delimgs(token, id, imge) {
    var query = {
        "fileName": imge
    };
    var urldei = `https://terminpr-linda.herokuapp.com/api/institution/${id}/slider`;
    var resultdi = await sendtoserver(urldei, query, token, 'DELETE');
    return resultdi;
}
async function getcatebyid(cateid) {
    var query = {

    };
    var urlc = `https://terminpr-linda.herokuapp.com/api/admin/category/${cateid}`;
    var resultct = await sendtoserver(urlc, query, null, 'GET');
    return resultct;
}
async function getinskip(lim, num, catn) {
    var query = {

    };
    var urlk = `https://terminpr-linda.herokuapp.com/api/institution?limit=${lim}&skip=${num}&cat=${catn}`;
    var resultk = await sendtoserver(urlk, query, null, 'GET');
    return resultk;
}
async function contactus(
    token,
    subj,
    email,
    name,
    message
) {
    var query = {
        "from_subject": subj,
        "from_email": email,
        "from_name": name,
        "message": message
    };
    var urlcon = 'https://terminpr-linda.herokuapp.com/api/user/contactUs';
    var resultcon = await sendtoserver(urlcon, query, token);
    return resultcon;
}
async function getemptime(id) {
    var query = {

    };
    var urlt = `https://terminpr-linda.herokuapp.com/api/employee/${id}/times`;
    var resultk = await sendtoserver(urlt, query, null, 'GET');
    return resultk;
}
async function addapoinment(
    token,
    insid,
    sid,
    uid,
    eid,
    dat,
    histo
) {
    var query = {
        "institution": insid,
        "service": sid,
        "user": uid,
        "employee": eid,
        "date": dat,
        "history": histo
    };
    var urlapo = 'https://terminpr-linda.herokuapp.com/api/appointment/';
    var resultapo = await sendtoserver(urlapo, query, token);
    return resultapo;
}
async function checkout(token, uid, pid, insid) {
    var query = {
        "id": pid,
        "institution": insid
    };
    var urlch = `https://terminpr-linda.herokuapp.com/api/payment/subscription/${uid}`;
    var resultch = await sendtoserver(urlch, query, token);
    return resultch;
}
async function adpayment(token, uid, ids, insid) {
    var query = {
        "services": ids,
        "institution": insid
    };
    var urlpay = `https://terminpr-linda.herokuapp.com/api/payment/pay/${uid}`;
    var resultpay = await sendtoserver(urlpay, query, token);
    return resultpay;
}
export {
    login, register, addinsitution, addservic, addemp, getins, updateins, updateser,
    getcate, getplan, deletplan, getuser, updateuser, updphotouser, subscrib, unsubscrib,
    getinsid, forgetpass, resetpass, getemp, getser, updphotoins, getempbyid,
    addplan, loginadmin, addadmin, addcate, deletcate, updateemp, getserbyid,
    updphotoemp, getinscat, addimgs, delimgs, getcatebyid, getinskip, contactus,
    getemptime, addapoinment, verfiya, checkout, adpayment
};
