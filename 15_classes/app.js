//neneye dayalı programlama

class User{

    constructor(ad,soyAd,yas){                 //yapıcı method
        this.ad =ad;
        this.soyAd = soyAd;
        this.yas = yas;
    }

    get tamAd(){                             
        return this.ad;
    }

    set yasKontrol(yas){
        if(this.yas<0)
            console.log("doğmadı"); 
    }

    adYaz(){                                 //method
        return this.ad +" "+ this.soyAd; 
    }

    static yasYaz(){            //static metodlara sınıflar aracılığıyla ulaşılır
        return this.yas;
    }
}

const person1 = new User();               //sınıf örneği oluşturma obje
person1.ad="ali";
person1.soyAd="taş";
User.yas =22;
console.log(person1.tamAd);
console.log(person1.adYaz());
console.log(User.yasYaz());


class Animal extends User{               //kalıtım alma

    walk(){
        console.log("ı walk with my four legs");
    }

    adYaz(){
        super.adYaz();     //ana sınıfın metodunu çağırdık ve animala göre yazdık 
        return this.ad;
    }
}

const a1 = new Animal();
a1.ad="tavşan";
console.log(a1.adYaz());