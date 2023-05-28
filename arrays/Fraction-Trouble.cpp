//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution{
	public:
	vector<int>LargestFraction(int n, int d){
	    int num = -1, den = 1;
        
        for(int y = 10000; y>=2 ; --y){
            
            int x = (n * y -1)/d;
            
            if((__gcd(x, y) == 1) && x*den >= y*num){
                num = x;
                den = y;
            }
        }
        
        return {num, den};
	}
};

//{ Driver Code Starts.
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int n, d;
		cin >> n >> d;
		Solution ob;
		vector<int>ans = ob.LargestFraction(n, d);
		for(auto i: ans)
			cout << i <<" ";
		cout << "\n";
	}
	return 0;
}
// } Driver Code Ends