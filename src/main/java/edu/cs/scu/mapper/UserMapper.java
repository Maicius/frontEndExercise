package edu.cs.scu.mapper;

import edu.cs.scu.entity.User;

/**
 * Created by maicius on 2017/3/31.
 */
public interface UserMapper {
    User doUserLogin(User user) throws Exception;
}
