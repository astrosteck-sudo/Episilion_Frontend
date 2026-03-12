import { PageHeader } from "../PageHeader/PageHeader"
import { SiteFooter } from "../SiteFooter/SiteFooter"
import { Link } from "react-router-dom"
import { useEffect } from "react";
import styles from  './logins.module.css';

export function LoginPage({ navlink, setNavLink }) {

    useEffect(() => {
        document.body.classList.add("body-bg");
        return () => {
            document.body.classList.remove("body-bg");
        };
    }, []);

    return (
        <>
            <title>Login | Episilion Hostels</title>
            <PageHeader navlink={navlink} setNavLink={setNavLink} />

            <main className={styles["logins-main"]}>
                <div class={styles["login-box"]}>
                    <form action="">
                        <h2>Welcome Back</h2>
                        <div class={styles["input-box"]}>
                            <input type="eail" name="user-email" id="user-email" required title="Enter Your Email Address Here"></input><br></br>
                            <label for="user-email">Enter Your Email Address</label>
                        </div>

                        <div class={styles["input-box"]}>
                            <input type="password" name="user-password" id="user-password" required
                                title="Enter Your Password Here"></input>
                            <label for="user-password">Enter Your Password</label>
                        </div>

                        <div class={styles["buttons"]}>
                            <button type="submit">Login</button>
                        </div>
                        <p class={styles["altenative-text"]}>Already Have An Account <Link to="/signup">Sign Up</Link></p>

                    </form>
                </div>
            </main>
            <SiteFooter />
        </>
    )
}