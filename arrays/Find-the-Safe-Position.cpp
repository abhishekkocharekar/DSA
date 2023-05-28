//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution {
  public:
    int Josh(vector<int>&person, int k, int idx){
        
        if (person.size() == 1) {
            return person[0];
        }
        idx = ((idx + k) % person.size());
     
        person.erase(person.begin() + idx);
     
        Josh(person, k, idx);
    }
    
  public:
    int safePos(int n, int k) {
        vector<int>person;
        for(int i = 1 ; i<= n ; i++){
            person.push_back(i);
        }
        return Josh(person,k-1,0);
        
    }
};



//{ Driver Code Starts.
int main() {
    int t;
    cin >> t;
    while (t--) {
        int n,k;
        
        cin>>n>>k;

        Solution ob;
        cout << ob.safePos(n,k) << endl;
    }
    return 0;
}
// } Driver Code Ends