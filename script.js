document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('#navbar .nav-item a');

    // Change font color on hover
    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.color = '#FFF'; // Change to the desired hover color
        });
        item.addEventListener('mouseout', function() {
            this.style.color = '#FFF'; // Revert to the original color
        });
    });

    // Existing scroll event listener
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            navbar.style.backgroundColor = 'rgb(0, 0, 26)';
        } else {
            navbar.style.backgroundColor = '';
        }
    });
});

//used firebase for storing contact us database
function check()
{
    let Name = document.getElementById('name').value;
    let Email = document.getElementById('email').value;
    let Query = document.getElementById('query').value;

    let user={
        name:Name,
        email:Email,
        query:Query
    }

    if(Name.length>1 && Email.length>10 && Query.length>1)
    {
        fetch('https://beybladers-a0012-default-rtdb.firebaseio.com/user.json',
        {
            method:'post',
            body:JSON.stringify(user)
        }).then(()=>
        {
            alert('Thank You For Contacting Us.');
            document.getElementById('name').value="";
            document.getElementById('email').value="";
            document.getElementById('query').value="";
        }) 
    }
    else if(Name.length<=1 && Query.length<=1 && Email.length<=10){
        alert('Please fill all Details.')
    }
    else if(Name.length<=1)
    {
        alert('Please give a Valid Name.')
    }
    else if(Email.length<=10){
        alert('Please enter a valid Email ID')
    }
    else if(Query.length<=1){
        alert('Your message is too short.')
    }
}