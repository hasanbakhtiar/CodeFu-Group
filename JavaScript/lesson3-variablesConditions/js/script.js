
// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərfləri anlayır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
// 9.Eyni dəyişkən adını dəişkən ifadələrində istifadə etmək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield

// var        -> variable (global)
// let        -> let      (local)
// const      -> constant (local)

// // global
// if (true) {
//     // local global
//     if (true) {
//         // local global
//         if (true) {
//             var a = 5;
//             console.log(a); 
//             // local
//         }
//     }
// }







// Condations
// if - > eger
// else -> deyilse
// else if -> deyilse eger

// var a = 51;

// if (a == 51) {
//     console.log(5);
// }else if(a > 10){
//     console.log('a is big');
// }else{
//     console.log('something is wrong...');
// }


let myTime = prompt();    

if (myTime>5&&myTime<13) {
    console.log('good morning');

    if (myTime == 9) {
        console.log('lesson start');
    }
}else if(myTime >= 13 && myTime <17){
console.log('good afternoon');
}else if(myTime >=17 && myTime <21){
    console.log('good evening');
}else if(myTime > 21 && myTime <=23){
    console.log('good night');
}else{
    console.log('time is wrong');
}