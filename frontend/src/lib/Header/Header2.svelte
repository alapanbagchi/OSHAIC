
<div class="header">
    <div class="logo">
        <img src="images/logo/oshaic.svg" alt="">
    </div>
    <button>Sign Up</button>
</div>

<style>
	.header {
        position: absolute;
		width: 100%;
		height: 81px;
		display: flex;
		align-items: center;
        justify-content: space-between;
        padding: 0 40px;
	}
	@media screen and (max-width:800px){
		.header{
			padding: 0 20px;
		}
	}
    button {
		display: flex;
		gap: 10px;
		white-space: nowrap;
		background-color: var(--onBackground);
        border: 1px solid var(--onSurface);
        font-weight: 500;
		align-items: center;
		padding: 12px 15px;
		border-radius: 7px;
		cursor: pointer;
		color: #fff;
		font-size: 14px;
        outline: none;
        transition: all 0.1s ease-in-out;
	}
	button:hover {
		background-color: var(--primary);
        transition: all 0.3s ease-in-out;
	}
    button:active{
        background-color: var(--primaryActive);
        transition: all 0.1s ease-in-out;
		transform: scale(0.97);
    }
</style>
