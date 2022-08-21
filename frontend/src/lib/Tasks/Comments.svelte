<script>

import { faker } from "@faker-js/faker";

</script>
<div class="wrapper">
    <div class="avatar">
        <img src={faker.image.avatar()} alt="">
    </div>
    <div class="data">
        <div class="name">
            <p>{faker.name.firstName()} {faker.name.lastName()}</p>
        </div>
        <div class="comment">
            <p>{faker.lorem.paragraph(10)}</p>
        </div>
    </div>
</div>

<style>
    .wrapper{
        width: 100%;
        display: flex;
    }
    .data{
        margin-left: 30px;
    }
    .avatar{
        width: 50px;
        min-width: 50px;
        height: 50px;
        overflow: hidden;
        border-radius: 50%;
    }
    .avatar img{
        width: 100%;
    }
    .data{
        margin-left: 30px;
    }
    .name{
        margin-bottom: 10px;
        font-weight: 500;
        font-size: 17px;
    }
    .comment{
        opacity: 0.8;
        line-height: 25px;
    }
</style>