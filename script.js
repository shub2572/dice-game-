function myFunction()
{
    const rno1=Math.floor(Math.random()*6)+1;
    // console.log(rno1);
    const rimageone='assents/'+rno1+'.png';
    // console.log(rimageone);
    document.querySelectorAll('img')[1].setAttribute('src',rimageone);
    const rno2=Math.floor(Math.random()*6)+1;
    const rimagetwo='assents/'+rno2+'.png';
    document.querySelectorAll('img')[2].setAttribute('src',rimagetwo);

        if(rno1>rno2)
        {
            document.querySelector("h2").innerHTML="Player 1 is Win!!!";
        }
        else if(rno2>rno1)
        {
            document.querySelector("h2").innerHTML="Player 2 is Win!!!";
        }
        else
        {
            document.querySelector("h2").innerHTML=" It's Draw";
        }
}
