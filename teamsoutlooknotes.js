import { useMsal } from "@azure/msal-react";
import { Client } from "@microsoft/microsoft-graph-client";

function useGraphClient() {
    const { instance, accounts } = useMsal();

    const getClient = async () => {
        const tokenResponse = await instance.acquireTokenSilent({
            scopes: [
                "User.Read",
                "Group.Read.All",
                "Team.ReadBasic.All",
                "ChannelMessage.Read.All",
                "Mail.Read",
                "Notes.Read",
            ],
            account: accounts[0],
        });

        return Client.init({
            authProvider: (done) => {
                done(null, tokenResponse.accessToken);
            },
        });
    };

    return getClient;
}

/*fetching teams
const client = await getClient();
const teams = await client.api("/me/joinedTeams").get();
*/