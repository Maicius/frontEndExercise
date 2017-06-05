package edu.cs.scu.service;

import edu.cs.scu.entity.User;

/**
 * Created by maicius on 2017/3/31.
 */
public interface LoginService {
    public User doUserLogin(User user) throws Exception;
}
