function solve(array) {
    let users = new Map();

    for (let line of array) {
        if (line === "Log out") {
            break;
        }
        let [command, user, num] = line.split(': ');
        num = Number(num);

        switch (command) {
            case 'New follower':
                if (!users.has(user)) {
                    users.set(user, [0, 0])
                }
                break;
            case 'Blocked':
                if (!users.has(user)) {
                    console.log(`${user} doesn't exist.`);
                } else {
                    users.delete(user);
                }
                break;

            case 'Like':
                if (!users.has(user)) {
                    users.set(user, [0, 0]);
                    let value = users.get(user);
                    value[0] += num;
                } else {
                    let value = users.get(user);
                    value[0] += num;
                }
                break;
            case 'Comment':
                if (!users.has(user)) {
                    users.set(user, [0, 0]);
                    let value = users.get(user);
                    value[1] = 1;
                } else {
                    let value = users.get(user);
                    value[1] += 1;
                }
                break;
        }
    }
    
    let follower = 0;
    
    for (let element of users) {
        follower++;
    }

    console.log(`${follower} followers`);

    for (let [key, value] of users) {
        console.log(`${key}: ${value[0] + value[1]}`)
    }
}
solve(["Blocked: Amy",

    "Comment: Amy",

    "New follower: Amy",

    "Like: Tom: 5",

    "Like: Ellie: 5",

    "Log out"]) 